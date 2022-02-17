import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Board from "./components/Board";
import { toDoAtom } from "./store/atoms";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: flex;
  column-gap: 20px;
`;

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoAtom);

  const onDragEnd = (info: DropResult): void => {
    const { destination, source, draggableId } = info;
    if (destination?.droppableId === source.droppableId) {
      setToDos((prev) => {
        const boardCopy = [...prev[source.droppableId]];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, draggableId);
        return { ...prev, [destination.droppableId]: boardCopy };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} items={toDos[boardId]} key={boardId} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default App;
