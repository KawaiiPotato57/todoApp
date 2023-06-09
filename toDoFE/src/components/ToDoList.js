import React from "react";
import useStyles from "../assets/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
  Menu,
  MenuItem,
  Divider,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function ToDoList(props) {
  const classes = useStyles();

  const tasks = props.todos.map((todo, index) => (
    <React.Fragment key={index}>
      <ListItem key={index}>
        <Checkbox
          checked={todo.completed || false}
          onChange={() => props.handleToggleComplete(todo.id, todo.completed)}
        />
        <ListItemText
          primary={todo.task}
          secondary={
            todo.completed
              ? `Completed on ${todo.completedTime}`
              : `Created on ${todo.creationTime}`
          }
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        />
        <ListItemSecondaryAction>
          <IconButton
            onClick={(event) => props.handleMenuOpen(event, index)}
            edge="end"
            aria-label="more"
            aria-controls={`menu-${index}`}
            aria-haspopup="true"
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id={`menu-${index}`}
            anchorEl={props.anchorEl}
            open={Boolean(props.anchorEl) && props.selectedTodo === index}
            onClose={props.handleMenuClose}
          >
            <MenuItem onClick={props.handleDeleteTodo}>Delete</MenuItem>
          </Menu>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </React.Fragment>
  ));
  return (
    <div>
      <List className={classes.list}>{tasks}</List>
    </div>
  );
}

export default ToDoList;