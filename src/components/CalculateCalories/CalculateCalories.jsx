
const CalculateCalories = ({calories}) => {

  return (
    <div className="gap-2 mb-5 flex justify-center">
      <p className="text-pink font-semibold" >Calories Burned: </p>
      <p className="font-semibold">{calories} kcal</p>
    </div>
  )
}

export default CalculateCalories