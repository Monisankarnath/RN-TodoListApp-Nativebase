/* eslint-disable prettier/prettier */
import React, {useState, useContext} from 'react';
import {styles} from './styles';
import {
  AddIcon,
  FlatList,
  IconButton,
  Modal,
  useColorMode,
  VStack,
} from 'native-base';
import {FormModal, TaskCard} from '../../components';
import {GlobalContext} from '../../hooks/GlobalState';

const initialState = {id: null, text: '', completed: false};
const TaskList = () => {
  const [modal, setModal] = useState(false);
  const [task, setTask] = useState(initialState);
  const {colorMode} = useColorMode();
  const [isUpdating, setIsUpdating] = useState(false);

  const {addTask, updateTask, removeTask, taskList} = useContext(GlobalContext);

  const iconBg = colorMode === 'dark' ? '#E3F2F9' : '#003F5E';
  const handleCloseModal = () => {
    setModal(false);
    setTask(initialState);
  };
  const handleTask = inputValue => {
    const taskId = task.id ? task.id : Date.now();
    setTask({id: taskId, text: inputValue, completed: false});
  };
  const submitTask = () => {
    isUpdating ? updateTask(task) : addTask(task);
    handleCloseModal();
    setIsUpdating(false);
  };
  const handleCompletedItem = item => {
    const newStatus = !item.completed;
    const updatedItem = {...item, completed: newStatus};
    updateTask(updatedItem);
  };
  const handleTaskCardPressed = item => {
    setIsUpdating(true);
    setTask(item);
    setModal(true);
  };
  const handleDeleteTask = id => {
    removeTask(id);
  };
  return (
    <VStack style={styles.container}>
      <FlatList
        data={taskList}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TaskCard
            item={item}
            setTask={setTask}
            setModal={setModal}
            handleCompletedItem={handleCompletedItem}
            handleTaskCardPressed={handleTaskCardPressed}
            handleDeleteTask={handleDeleteTask}
          />
        )}
      />
      <VStack style={styles.addButton}>
        <IconButton
          rounded="full"
          size="md"
          bg={iconBg}
          variant="solid"
          icon={<AddIcon />}
          onPress={() => setModal(true)}
        />
      </VStack>
      <Modal isOpen={modal} onClose={handleCloseModal} size="lg">
        <FormModal
          task={task}
          handleTask={handleTask}
          submitTask={submitTask}
        />
      </Modal>
    </VStack>
  );
};

export default TaskList;
