import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView } from 'react-native'
import WelcomeSlide from '../components/WelcomeSlide'
import HomeSlider from '../components/HomeSlider'
import UpcommingContestHome from '../components/UpcommingContestHome'
import RecentBlogs from '../components/RecentBlogs'
import Top5Miners from '../components/Top5Miners'

export default class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{backgroundColor: '#ecf0f1',}}>
                <ScrollView>
                    <WelcomeSlide/>
                    <HomeSlider/>
                    <UpcommingContestHome/>
                    <Top5Miners/>
                    <RecentBlogs/>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
