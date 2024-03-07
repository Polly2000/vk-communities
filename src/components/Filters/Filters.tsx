import { useState } from 'react';
import {
  Button,
  Checkbox,
  Counter,
  FormItem,
  FormLayoutGroup,
  ModalPage,
  ModalPageHeader,
  ModalRoot,
  PanelHeaderButton,
  PanelHeaderClose,
  SplitLayout,
  SubnavigationBar,
  SubnavigationButton,
  VisuallyHidden,
  platform,
  usePlatform,
} from '@vkontakte/vkui';
import { Icon24Filter, Icon24Dismiss } from '@vkontakte/icons';

const Filters = () => {
  const MODAL_NAME = 'filters';
  const COLORS = [
    { value: 'red', label: 'Красный' },
    { value: 'green', label: 'Зеленый' },
    { value: 'yellow', label: 'Желтый' },
    { value: 'blue', label: 'Синий' },
    { value: 'purple', label: 'Фиолетовый' },
    { value: 'white', label: 'Белый' },
    { value: 'orange', label: 'Оранжевый' },
  ];
  const platform = usePlatform();

  const [filtersModalOpened, setFiltersModalOpened] = useState<boolean>(false);
  const [allGroups, setAllGroups] = useState<boolean>(true);
  const [isOpenGroup, setIsOpenGroup] = useState<boolean>(false);
  const [isClosedGroup, setIsClosedGroup] = useState<boolean>(false);
  const [friendsGroup, setFriendsGroup] = useState<boolean>(false);

  const [color, setColor] = useState(['Красный']);
  const [colorsCount, setColorsCount] = useState(0);

  const openModal = () => {
    setFiltersModalOpened(true);
  };

  const closeModal = () => {
    setFiltersModalOpened(false);
  };

  const onChangeColorStyle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.currentTarget;
    if (checked) {
      setColor([...color, value]);
    } else {
      setColor(color.filter((v) => v !== value));
    }
  };

  const applyFilters = () => {
    let count = 0;

    color.length && count++;
    color.length && count++;

    closeModal();
    setColorsCount(count);
  };

  const modal = (
    <ModalRoot activeModal={filtersModalOpened ? MODAL_NAME : null} onClose={closeModal}>
      <ModalPage
        id={MODAL_NAME}
        header={
          <ModalPageHeader
            before={platform !== 'ios' && <PanelHeaderClose onClick={closeModal} />}
            after={
              platform === 'ios' && (
                <PanelHeaderButton onClick={closeModal}>
                  <Icon24Dismiss />
                </PanelHeaderButton>
              )
            }>
            Цвет
          </ModalPageHeader>
        }>
        <FormLayoutGroup>
          <FormItem top="Стиль">
            {COLORS.map(({ value, label }) => {
              return (
                <Checkbox
                  key={value}
                  value={value}
                  checked={color.includes(value)}
                  onChange={onChangeColorStyle}>
                  {label}
                </Checkbox>
              );
            })}
          </FormItem>

          <FormItem>
            <Button size="l" stretched onClick={applyFilters}>
              Показать результаты
            </Button>
          </FormItem>
        </FormLayoutGroup>
      </ModalPage>
    </ModalRoot>
  );

  return (
    <SplitLayout modal={modal}>
      <SubnavigationBar>
        <SubnavigationButton
          selected={allGroups}
          onClick={() => {
            setAllGroups(!allGroups);
            setIsOpenGroup(false);
            setIsClosedGroup(false);
            setFriendsGroup(false);
          }}>
          Все сообщества
        </SubnavigationButton>

        <SubnavigationButton
          selected={isOpenGroup}
          onClick={() => {
            setIsOpenGroup(!isOpenGroup);
            setAllGroups(false);
            setIsClosedGroup(false);
            setFriendsGroup(false);
          }}>
          Открытые
        </SubnavigationButton>

        <SubnavigationButton
          selected={isClosedGroup}
          onClick={() => {
            setIsClosedGroup(!isClosedGroup);
            setAllGroups(false);
            setIsOpenGroup(false);
            setFriendsGroup(false);
          }}>
          Закрытые
        </SubnavigationButton>

        <SubnavigationButton
          selected={friendsGroup}
          onClick={() => {
            setFriendsGroup(!friendsGroup);
            setAllGroups(false);
            setIsOpenGroup(false);
            setIsClosedGroup(false);
          }}>
          Сообщества друзей
        </SubnavigationButton>
        <SubnavigationButton
          before={<Icon24Filter />}
          selected={colorsCount > 0}
          expandable
          onClick={openModal}>
          Цвет
        </SubnavigationButton>
      </SubnavigationBar>
    </SplitLayout>
  );
};

export default Filters;
