import { Header } from '../Header/Header';
import { oneNews } from '../../utils/auth'
import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { View } from 'react-native';
export const NewsPage = (({ route }) => {
    const [news, setNews] = useState({})
    const {id} = route.params;
    const getNews = async () => {
        let response = await oneNews(id)
        setNews(response.data.news)
    }
    useEffect(() => {
        getNews()
    }, [])

    return (
        <View>
            <Header />
             <Card
             card={news}/>
        </View>
    )
})