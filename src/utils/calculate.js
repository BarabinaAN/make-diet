function calculate (obj) {
   const { age, weight, gender, growth, activity } = obj.fields

   const genderI = Number(gender) === 5 ? 1 : -1
   const base = Number(weight) * 10 + Number(growth) * 6.25 - Number(age) * 5 + genderI * Number(gender)
   const normal = base * Number(activity)
   const loss = normal - 400 < base ? base : normal - 400
   const gain = normal + 200

   return [
      getCalories(normal, 'normal'),
      getCalories(loss, 'loss'),
      getCalories(gain, 'gain'),
   ]
}

function getCalories(val, name = '') {
   return {
      balance: name,
      calories: Math.floor(val),
      proteins: Math.floor(val * 0.3),
      fats: Math.floor(val * 0.3),
      carbohydrates: Math.floor(val * 0.4)
   }
}

export default calculate