CREATE TABLE IF NOT EXISTS `mydb`.`account` (
  `name` VARCHAR(0) NOT NULL,
  `email` VARCHAR(0) NOT NULL,
  `password` VARCHAR(0) NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `bio` VARCHAR(0) NULL,
  `twitter` VARCHAR(45) NULL,
  `facebook` VARCHAR(45) NULL,
  `instagram` VARCHAR(45) NULL,
  `birthday` DATETIME NOT NULL,
  `pfp` VARCHAR(0) NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)


CREATE TABLE IF NOT EXISTS `mydb`.`post` (
  `post` VARCHAR(0) NULL,
)

CREATE TABLE IF NOT EXISTS `mydb`.`friends` (

)

ENGINE = InnoDB