import React from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	ActivityIndicator
} from 'react-native'
import { useState } from 'react'
import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import PopularJobsCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
	const router = useRouter()
	const isLoading = false
  const error=false
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Popular jobs</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>Show all</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.cardsContainer}>
        {isLoading ?(
          <ActivityIndicator size="lange" color={COLORS.primary}/>
        ):error?
          <Text>Something went wrong</Text>:(
            <FlatList
            data={[1,2,3,4]}
            keyExtractor={item=>item?.job_id}
            renderItem={(item)=>(
              <PopularJobsCard item={item}/>
            )}
            contentContainerStyle={{columnGap:SIZES.medium}}
            horizontal
            />
          
        )}
      </View>
		</View>
	)
}

export default Popularjobs
