export default function CarForm() {
  const submitHandler = async (e) => {
    e.preventDefault(); // prevents the page from reloading on submit
    const form = new FormData(e.target); // organize the form data into a formData object
    const formData = Object.fromEntries(form.entries()); // convert form data to an object

    console.log(formData);

    const res = await fetch('/api/cars', {
      body: JSON.stringify(formData),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type='text' name='make' placeholder='Make' />{' '}
      {/* name should match the redis schema */}
      <input type='text' name='model' placeholder='Model' />
      <input type='text' name='price' placeholder='Price' />
      <input type='text' name='image' placeholder='Image' />
      <textarea type='text' name='description' placeholder='Description' />
      <button type='submit'>Create Car</button>
    </form>
  );
}
