import axios from "axios";

function GetImagesApi(q, page = 1) {
  return axios.get(
    `https://pixabay.com/api/?key=23598591-bbf9fc426017fbba5b00fa283&q=${q}&page=${page}&per_page=12&image_type=photo`
  );
}

export { GetImagesApi };
