CREATE TABLE user_ecad (
    id int AUTO_INCREMENT  PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    login VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    version int NOT NULL
);

CREATE TABLE system_user_ecad (
    id INT AUTO_INCREMENT  PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    login VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    version int NOT NULL
);


CREATE TABLE levy_title (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  user_id INT NOT NULL,
  competence_at DATE NOT NULL,
  levy_value DECIMAL NOT NULL,
  installment_qt INT NOT NULL,
  system_user_id INT NOT NULL,
  cancel_justify VARCHAR(200) NOT NULL,
  cancel_at DATE NULL,
  created_at DATE NOT NULL DEFAULT now(),
  updated_at DATE NOT NULL DEFAULT now(),
  version int NOT NULL,
  level INT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES user_ecad(id),
  FOREIGN KEY(system_user_id) REFERENCES system_user_ecad(id)
);
CREATE TABLE installment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    value DECIMAL NOT NULL,
    number INT NOT NULL,
    levy_title_id INT NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    version int NOT NULL,
    FOREIGN KEY(levy_title_id) REFERENCES levy_title(id)
);
