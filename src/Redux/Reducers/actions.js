import uuid from "react-uuid"
import { ACTION_TYPES } from "./types"

export const createTask = ({title,description,priority}) => {
    return {
        type: ACTION_TYPES.CREATE,
        payload: {
            id: uuid(),
            title,
            description,
            priority,
            status: "To Do"
        }
    }
}

export const editTask = ({id, params}) => {
    return {
        type: ACTION_TYPES.EDIT,
        payload: {
            id,
            params
        }
    }
}