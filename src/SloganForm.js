export default function SloganForm({ handleFormSubmit, sloganForm, setSloganForm }) {
  // React forms are a pain!

  // This component takes in a prop called setSlogans, which is a function that takes in an array of slogans.
  // Also, this component also takes in a prop called slogans, which is an arry of strings. ////
  // On submit call the setSlogans state with a new array that is a copy of the old array with the new slogan immutably added to the end

  // set the sloganInput form state to an empty string to reset the form

  return (
    <section>
      {/* on submit, call the handleSubmit function, defined above */}
      <form onSubmit={handleFormSubmit}>
        Add a slogan to the list!
        <input value={sloganForm} onChange={(e) => setSloganForm(e.target.value)} />
        {/* on change, set the sloganInput in state to be the input value */}
        {/* also, weirdly, set the value of this input to the sloganInput tracked in state to make this a 'controlled' form input */}
        <button>Submit</button>
      </form>
    </section>
  );
}
