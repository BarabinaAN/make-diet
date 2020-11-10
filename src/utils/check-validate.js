import { isNumber, isEmpty } from './validate'

export function checkValidate (obj, error) {
   const { fields, errors } = obj

   const isValidate = Object.keys(errors).every(
      (key) => checkValue(key, fields[key], error)
   )

   if (!isValidate) {
      Object.keys(errors).map(
         (key) => checkValue(key, fields[key], error)
      )
      console.error('not valide value', isValidate)
   }

   return isValidate
}

const ckeckError = (validate, error) => (key, val) => (msg) => {
   if (!validate(val)) {
      error(key, msg)
      return false
   }
   error(key)
   return true;
}

function checkValue(key, val, error) {
   const empty = ckeckError(isEmpty, error)(key, val)('пусто')
   const number = ckeckError(isNumber, error)(key, val)

   switch (key) {
      case 'gender':
         return empty
      case 'age':
         return empty && number('age is not a number')
      case 'weight':
         return empty && number('weight is not a number')
      case 'growth':
         return empty && number('growth is not a number')
      case 'activity':
         return empty
      default:
         return false
   }
}