import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class RoomStore {
  rooms = [];

  constructor() {
    makeObservable(this, {
      rooms: observable,
      fetchRooms: action,
      createRoom: action,
    });
  }

  fetchRooms = async () => {
    try {
      const response = await axios.get(
        "https://coded-task-axios-be.herokuapp.com/rooms"
      );
      this.rooms = response.data;
    } catch (error) {
      console.log(error);
    }
  };
  createRoom = async (newRoom) => {
    try {
      const response = await axios.post(
        "https://coded-task-axios-be.herokuapp.com/rooms",
        newRoom
      );
      this.rooms.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}
const roomStore = new RoomStore();
export default roomStore;
