const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content:
        "Telangana Minister KT Rama Rao Invites Tesla CEO Elon Musk To Set Shop In The State",
    },
    "task-2": {
      id: "task-2",
      content: `"Got Privilege Of Cow Worship": Amit Shah Tweets Photo On Makar Sankranti`,
    },
    "task-3": {
      id: "task-3",
      content:
        "Dogecoin Jumps After Elon Musk Tweets Tesla Merchandise 'Buyable' With the Token",
    },
    "task-4": {
      id: "task-4",
      content: `Twitter "Agreed To Regulations": Nigeria Lifts Ban After 7 Months`,
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "RECENT TWEETS",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "SAVED TWEETS",
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2"],
};

export default initialData;
