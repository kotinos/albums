import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import CardDetail from './CardDetail';

class InfoList extends Component {
  state = { colleges: [] };

  componentWillMount() {
    axios.get('https://api.myjson.com/bins/1agu4z')
      .then(response => this.setState({ colleges: response.data }));
  }

  renderColleges() {
    return this.state.colleges.map(college =>
      <CardDetail key={college.title} college={college} />
    );
  }

  render() {
    console.log(this.state);

  return (
      <ScrollView>
        {this.renderColleges()}
      </ScrollView>
    );
  }
}

export default InfoList;
