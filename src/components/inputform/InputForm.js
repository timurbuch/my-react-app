import "./InputForm.css";
const InputForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { name, house, gender, dateOfBirth, patronus } = form.elements;
    console.log(form.elements);
    console.log(name.value);
    props.onInput(
      name.value,
      house.value,
      gender.value,
      dateOfBirth.value,
      patronus.value
    );
    form.reset();
    name.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input type="text" name="name" required></input>
      </label>
      <label htmlFor="house">
        House:
        <input type="text" name="house"></input>
      </label>
      <label htmlFor="gender">
        Gender:
        <input type="text" name="gender"></input>
      </label>
      <label htmlFor="dateOfBirth">
        Date of Birth:
        <input type="text" name="dateOfBirth"></input>
      </label>
      <label htmlFor="patronus">
        Patronus:
        <input type="text" name="patronus"></input>
      </label>
      <button className="submitButton">Create character</button>
    </form>
  );
};

export default InputForm;
