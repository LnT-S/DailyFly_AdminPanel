import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen from "./container/screen/Screen.js";
import Login from "./container/component/login/LogIn.js";
import Uploadcategory from "./container/component/manageCategory/UploadCategory.js";
import Managecategory from "./container/component/manageCategory/ManageCategory.js";
import UploadImages from "./container/component/manageImages/UploadImages.js";
import ManageImages from "./container/component/manageImages/ManageImages.js";
import ManageUser from "./container/component/manageUser/ManageUser.js";
import AddNewAdmin from "./container/component/admin/CreateNewAdmin.js";


function App() {
  return (
    <BrowserRouter>
        <Screen>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/logIn" element={<Login/>} />
            <Route path="/add-category" element={<Uploadcategory/>} />
            <Route path="/manage-category" element={<Managecategory/>} />
            <Route path="/upload-images" element={<UploadImages/>} />
            <Route path="/manage-images" element={<ManageImages/>} />
            <Route path="/manage-user" element={<ManageUser/>} />
            <Route path="/new-admin" element={<AddNewAdmin/>} />
          </Routes>
        </Screen>
      </BrowserRouter>
  );
}

export default App;
