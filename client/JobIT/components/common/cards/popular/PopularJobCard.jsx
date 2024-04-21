import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { checkImageURL } from '../../../../utilities'
import styles from './popularjobcard.style'

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  console.log(item);
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)}
                      onPress={handleCardPress}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image source={{uri: checkImageURL(item.employer_logo)
                      ? item.employer_logo
                      : 'https://jobs.nsbs.bg/root/images/default_image_company.png'}}
               resizeMode='contain'
               style={styles.logoImage}/>
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard