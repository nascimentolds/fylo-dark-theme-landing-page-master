function Button({info}) {
  return (
    <button className="w-full font-bold p-4 mt-4 rounded-full bg-gradient-to-r from-cyanInsideGradient to-blueInsideGradient">
      {info}
    </button>
  )
}

export default Button;