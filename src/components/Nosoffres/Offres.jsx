import React from "react";
import "./Offres.css";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
const Offres = () => {
  return (
    <div className="offres">
      <div className="containera ">
        <div className="accordion">
          <div className="accordion-item  " id="question1">
            <a className="accordion-link  " href="#question1">
              how often do you go
              <MinusOutlined className="remove" />
              <PlusOutlined className="add" />
            </a>
            <div className="answer">
              <p>
                {" "}
                Un texte est une série orale ou écrite de mots perçus comme
                constituant un ensemble cohérent, porteur de sens et utilisant
                les structures propres à une langue (conjugaisons, construction
                et association des phrases…). ... L'étude formelle des textes
                s'appuie sur la linguistique, qui est l'approche scientifique du
                langage.
              </p>
            </div>
            <div>
              <img className="ques1" src="cellule d'assemblage.jpg" />
            </div>
          </div>

          <div className="accordion-item" id="question2">
            <a className="accordion-link" href="#question2">
              how often do you go
              <MinusOutlined className="remove" />
              <PlusOutlined className="add" />
            </a>
            <div className="answer">
              <p>
                {" "}
                Un texte est une série orale ou écrite de mots perçus comme
                constituant un ensemble cohérent, porteur de sens et utilisant
                les structures propres à une langue (conjugaisons, construction
                et association des phrases…). ... L'étude formelle des textes
                s'appuie sur la linguistique, qui est l'approche scientifique du
                langage.
              </p>
            </div>
            <div>
              <img className="ques2" src="machines sur-mesure.jpg" />
            </div>
          </div>

          <div className="accordion-item" id="question3">
            <a className="accordion-link" href="#question3">
              how often do you go
              <MinusOutlined className="remove" />
              <PlusOutlined className="add" />
            </a>
            <div className="answer">
              <p>
                {" "}
                Un texte est une série orale ou écrite de mots perçus comme
                constituant un ensemble cohérent, porteur de sens et utilisant
                les structures propres à une langue (conjugaisons, construction
                et association des phrases…). ... L'étude formelle des textes
                s'appuie sur la linguistique, qui est l'approche scientifique du
                langage.
              </p>
            </div>

            <div>
              <img className="ques3" src="Projets technologie innovants.jpg" />
            </div>
          </div>

          <div className="accordion-item" id="question4">
            <a className="accordion-link" href="#question4">
              how often do you go
              <MinusOutlined className="remove" />
              <PlusOutlined className="add" />
            </a>
            <div className="answer">
              <p>
                {" "}
                Un texte est une série orale ou écrite de mots perçus comme
                constituant un ensemble cohérent, porteur de sens et utilisant
                les structures propres à une langue (conjugaisons, construction
                et association des phrases…). ... L'étude formelle des textes
                s'appuie sur la linguistique, qui est l'approche scientifique du
                langage.
              </p>
            </div>

            <div>
              <img className="ques4" src="00.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offres;
