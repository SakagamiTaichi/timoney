import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface AddCardProps {
  addCard: () => void;
}

const AddCardComponent: React.FC<AddCardProps> = ({ addCard }) => {
  return (
    <>
      <main>
        <Fab
          color="primary"
          aria-label="add"
          style={{ position: "fixed", bottom: 20, right: 20 }}
          onClick={addCard}
        >
          <AddIcon />
        </Fab>
      </main>
    </>
  );
};

export default AddCardComponent;
