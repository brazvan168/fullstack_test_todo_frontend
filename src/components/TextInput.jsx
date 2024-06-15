const TextInput = ({ name, handleChange }) => {
  return (
    <input
      name={name}
      onChange={handleChange}
    />
  )
}

export default TextInput