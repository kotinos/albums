import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//POSITIONING
//image | (Univeristy / Deparment)

const CardDetail = ({ college }) => {

//destructure from album
const { title, department, thumbnail_image, image, url } = college;

// another destructure
const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;

  return (
    <Card>
      <CardSection>
      <View style={thumbnailContainerStyle}>
        <Image
          style={thumbnailStyle}
          source={{ uri: thumbnail_image }}
        />
      </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{department}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
        style={imageStyle}
        source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button OnPress={() => Linking.OpenURL(url)} />
      </CardSection>
    </Card>
  );
};

//must specify style for image to appear
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    }
};

//image tag
//CardSection->image->text->text<-CardSection

export default CardDetail;
