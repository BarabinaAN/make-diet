import React, { Component } from 'react'
import { isNumber, isEmpty } from '../../utils/validate'

const withValidate = (View) => {
   return class extends Component {
      state = {
         fields: {
            gender: '',
            age: '',
            growth: '',
            weight: '',
            activity: '',
         },
         errors: {
            gender: '',
            age: '',
            growth: '',
            weight: '',
            activity: '',
         },
         result: null
      }

      componentDidMount() {
         const [...inputs] = document.querySelectorAll('input')
         const radio = inputs.filter(el => el.getAttribute('type') === 'radio')
         // this.setDefaultRadio(radio, 'gender')
         // this.setDefaultRadio(radio, 'activity')
      }

      setDefaultRadio = (elements, name) => {
         const defaultEl = elements.filter(el => el.getAttribute('name') === name)[0]
         const value = defaultEl.getAttribute('value')

         defaultEl.setAttribute('checked', true)
         this.setValue(name, value)
      }

      setValue = (name, value) => {
         this.setState((state) => {
            return {
               fields: {
                  ...state.fields,
                  [name]: value
               }
            }
         })
      }

      onChangeRadio = (e) => {
         const { name, value } = e.target
         this.setValue(name, value)
      }

      onSubmit = (e) => {
         e.preventDefault();
         // this.checkValidate(this.state);
         if (!this.checkValidate(this.state)) {
            return
         }
         this.calculate(this.state);
      }

      calculate = (obj) => {
         const { age, weight, gender, growth, activity } = obj.fields

         const genderI = Number(gender) === 5 ? 1 : -1
         const base = Number(weight) * 10 + Number(growth) * 6.25 - Number(age) * 5 + genderI * Number(gender)
         const normal = base * Number(activity)
         const loss = normal - 400 < base ? base : normal - 400
         const gain = normal + 200

         function getCalories(val) {
            return {
               calories: Math.floor(val),
               proteins: Math.floor(val * 0.3),
               fats: Math.floor(val * 0.3),
               carbohydrates: Math.floor(val * 0.4)
            }
         }

         this.setState(() => {
            return {
               result: {
                  normal: getCalories(normal),
                  loss: getCalories(loss),
                  gain: getCalories(gain),
               }
            }
         })
      }

      checkValidate = (obj) => {
         const { fields, errors } = obj

         const isValidate = Object.keys(errors).every(
            (key) => this.checkValue(key, fields[key])
         )

         if (!isValidate) {
            Object.keys(errors).map(
               (key) => this.checkValue(key, fields[key])
            )
            console.error('not valide value', isValidate)
         }

         return isValidate
      }

      checkValue = (key, val) => {
         const empty = this.validateFun(isEmpty)(key, val)('пусто')
         const number = this.validateFun(isNumber)(key, val)

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

      validateFun = (validate) => (key, val) => (msg) => {
         if (!validate(val)) {
            this.setError(key, msg)
            return false
         }
         this.setError(key)
         return true;
      }

      setError = (key, msg = '') => {
         this.setState((state) => {
            return {
               errors: {
                  ...state.errors,
                  [key]: msg
               }
            }
         })
      }

      render() {
         return <View {...this.state} onChangeRadio={this.onChangeRadio} onSubmit={this.onSubmit} />
      }
   }
}

export default withValidate