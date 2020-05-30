import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import styled, {css} from "styled-components";

const TodoListItemm = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    &:nth-child(even) {
        background: #f8f9fa;
    }
    & + & {
        border-top: 1px solid #dee2e6;
    }
`;

const Checkbox = styled.div`
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    svg {
        font-size: 1.5rem;
    }
    ${props => props.checked && css`
        svg{
            color: #22b8cf;
        }
    `};
`

const Text = styled.div`
    margin-left: 0.5rem;
    flex: 1;
    ${props => props.checkd && css`}
        color: #adb5bd;
        text-decoration: line-through;
    `};
`

const Remove = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
        color: #ff8787;
    }
`;

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;

    return (
        <TodoListItemm>
            <Checkbox checked={checked} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <Text checked={checked}>{text}</Text>
            </Checkbox>
            <Remove onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </Remove>
        </TodoListItemm>
    );
};

export default TodoListItem;