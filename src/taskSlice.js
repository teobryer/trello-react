import { createSlice } from "@reduxjs/toolkit";

const tasksList = [
  {
    id: 4,
    taskName: "Planifier un voyage à Bali",
    description:
      "Réserver les vols, trouver un hébergement, établir un itinéraire",
    state: "Todo",
    dueDate: new Date("2024-12-25"),
    priority: "Haute",
    tags: ["Voyage", "Asie"],
  },
  {
    id: 5,
    taskName: "Apprendre à jouer de la guitare",
    description: "S'entraîner 30 minutes par jour, suivre des cours en ligne",
    state: "Doing",
    dueDate: null,
    priority: "Moyenne",
    tags: ["Loisir", "Musique"],
  },
  {
    id: 6,
    taskName: "Rénover la salle de bain",
    description: "Choisir les carreaux, trouver un artisan, établir un budget",
    state: "Todo",
    dueDate: new Date("2025-03-31"),
    priority: "Haute",
    tags: ["Maison", "Bricolage"],
  },
  {
    id: 7,
    taskName: "Écrire un roman",
    description:
      "Définir les personnages, créer l'intrigue, écrire au moins 500 mots par jour",
    state: "Todo",
    dueDate: null,
    priority: "Basse",
    tags: ["Créativité", "Écriture"],
  },
  {
    id: 8,
    taskName: "Organiser une fête d'anniversaire surprise",
    description:
      "Choisir un thème, envoyer les invitations, préparer le gâteau",
    state: "Doing",
    dueDate: new Date("2024-11-15"),
    priority: "Haute",
    tags: ["Événement", "Famille"],
  },
  {
    id: 9,
    taskName: "Faire les courses",
    description: "Acheter du lait, des œufs et des légumes",
    state: "Done",
    dueDate: new Date("2024-11-10"),
    priority: "Moyenne",
    tags: ["Maison", "Courses"],
  },
  {
    id: 10,
    taskName: "Réparer la fuite d'eau",
    description: "Appeler un plombier",
    state: "Done",
    dueDate: new Date("2024-11-05"),
    priority: "Haute",
    tags: ["Maison", "Réparations"],
  },
  {
    id: 11,
    taskName: "Lire le chapitre 3 du livre",
    description: "Terminer avant vendredi",
    state: "Done",
    dueDate: new Date("2024-11-12"),
    priority: "Moyenne",
    tags: ["Études", "Lecture"],
  },
];

// type TaskType = {
//   id: number,
//   taskName: string,
//   description: string,
//   state: typeof TaskState,
//   dueDate: Date,
//   priority: string,
//   tags: string[],
// };

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    value: tasksList,
  },
  reducers: {
    addTask: (state, payload) => {
      state.value.push(payload.payload);
    },
    removeTask: (state, payload) => {
      state.value = state.value.filter((t) => t.id != payload.payload.id);
    },
    updateTaskState: (state, action) => {
      const taskIndex = state.value.findIndex(
        (task) => task.id.toString() === action.payload.draggableId
      );

      if (taskIndex !== -1) {
        state.value[taskIndex] = {
          ...state.value[taskIndex],
          state: action.payload.destination.droppableId,
        };
      }
    },
  },
});

export const { addTask, removeTask, updateTaskState } = taskSlice.actions;
export default taskSlice.reducer;
