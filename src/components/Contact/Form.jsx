import { useState } from "react";
import axios from "axios";

const Form = ({ style = "4" }) => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    option: "",
  });

  const handleFormChange = (e) => {
    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formValues = new FormData();

    formValues.append("name", formData.name);
    formValues.append("email", formData.email);
    formValues.append("phone", formData.phone);
    formValues.append("option", formData.option);

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.option
    ) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    const res = await axios
      .post("/api/sendgrid", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        option: formData.option,
      })
      .catch((err) => alert(err.message));

    if (!res) return;

    alert("Мы приняли вашу заявку. Спасибо!");
  };

  return (
    <section
      className={`contact section-padding pt-${
        style === "4" ? "0" : "50"
      } style-6`}
    >
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form className="form" method="post" onSubmit={handleFormSubmit}>
                <p className="text-center text-danger fs-12px mb-30">
                  {"Поля обязательны к заполнению *"}
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder={"Имя *"}
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder={"Эл. почта *"}
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder={"Номер телефона (вотсап) *"}
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <select
                        className="form-select"
                        defaultValue={"Что вас интересует? *"}
                        name="option"
                        onChange={handleFormChange}
                      >
                        <option value="how can we help">
                          {"Что вас интересует?"}
                        </option>
                        <option value="schoolStudents">
                          {"Программа для школьников"}
                        </option>
                        <option value="basicProgramming">
                          {"База программирования"}
                        </option>
                        <option value="advancedCourses">
                          {"Продвинутая программа"}
                        </option>
                        <option value="mentorship">{"Менторство джуна"}</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 text-center">
                    <input
                      type="submit"
                      value={"Отправить запрос"}
                      className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <img
            src="/assets/img/icons/contact_a.png"
            alt=""
            className="contact_a"
          />
          <img
            src="/assets/img/icons/contact_message.png"
            alt=""
            className="contact_message"
          />
        </div>
      </div>
    </section>
  );
};

export default Form;
