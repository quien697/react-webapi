import React, { Component } from 'react';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  //取得 City List 1
  getCityList1(){
    fetch("http://127.0.0.1:5000/citylist1")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.citylist
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  //取得 City List 2
  getCityList2(){
    fetch("http://127.0.0.1:5000/citylist2")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  //取得 City List 3
  getCityList3(cityName){
    const cityiist3 = "http://127.0.0.1:5000/citylist2/item?city_name="
    fetch(cityiist3 + cityName)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentDidMount() {
    this.getCityList3("New York")
  }


  render(){
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Hello Quien!</h1>
          <ul>
            {items.map(item => (
              <li key={item.cityname}>
                {item.id} : {item.city_name} ---- {item.country_name}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
};