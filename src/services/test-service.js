export default class TestService {
  _test = [
    {
      name: 'first'
    }
  ]

  getData = () => {
    return this._test
  }
}