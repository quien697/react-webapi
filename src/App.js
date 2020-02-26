import React, { Component } from 'react';

const api_Url = "http://127.0.0.1:5000"

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

 /* 取得 City List 1
 {
    "citylist": [
      {
        "city_name": "\u53f0\u5317", 
        "country_name": "Taiwan", 
        "id": 0
      }, 
      {
        "city_name": "New York", 
        "country_name": "United States", 
        "id": 1
      }, 
      {
        "city_name": "London", 
        "country_name": "United Kingdom", 
        "id": 2
      }
    ]
  }
  */
  getCityList1(){
    fetch(api_Url + "/citylist1")
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

  /* 取得 City List 2
  [
    {
      "city_name": "Taipei", 
      "country_name": "\u53f0\u7063", 
      "id": 0
    }, 
    {
      "city_name": "New York", 
      "country_name": "United States", 
      "id": 1
    }, 
    {
      "city_name": "London", 
      "country_name": "United Kingdom", 
      "id": 2
    }
  ]
  */
  getCityList2(){
    fetch(api_Url + "/citylist2")
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
    const cityiist3 = "/citylist2/item?city_name="
    fetch(api_Url + cityiist3 + cityName)
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
    this.getCityList1()
    //this.getCityList2()
    //this.getCityList3("New York")
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