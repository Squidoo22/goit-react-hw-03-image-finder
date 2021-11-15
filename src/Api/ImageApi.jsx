import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";

const API_KEY = "23598591-bbf9fc426017fbba5b00fa283";
axios.defaults.params = {
  key: API_KEY,
};

const GetImagesApi = async (query, page = 1) => {
  try {
    return await axios.get(
      `/?q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    );
  } catch (e) {
    console.log(e);
  }
};

export { GetImagesApi };
