import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList, Button, Image } from 'react-native'
import { connect } from 'react-redux'
import Geolocation from '@react-native-community/geolocation'
import update_location from '../../Store/actions/locationActions'
import get_restaurant_master from '../../Store/actions/restaurantMasterActions'

class ScreenOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: "",
            longitude: "",
            location: {},
            restaurant: []
        }
    }
    componentDidMount() {
        Geolocation.getCurrentPosition((pos) => {
            this.setState({
                location: pos.coords
            })
            this.props.setLocation(pos.coords)
        })
        this.props.getRestaurantMaster()
    }

    render() {
        // this.props.navigation.addListener('focus',()=>{
        //     this.props.getRestaurantMaster()
        // })
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Button
                    title={"Go to Second Screen"}
                    onPress={() => { this.props.navigation.navigate('ScreenTwo') }}
                />
                <Text>Person Name : {this.props.person.name}</Text>
                <Text>Game Name : {this.props.game.name}</Text>
                <Text>Latitude : {this.props.location.latitude}</Text>
                <Text>Longitude : {this.props.location.longitude}</Text>
                <FlatList
                    data={this.props.users}
                    ListEmptyComponent={() => <Text>No users found</Text>}
                    renderItem={({ item }) => {
                        return (
                            <Text>{item.first_name}</Text>
                        )
                    }}
                />
                <FlatList
                    data={this.props.restaurantMaster}
                    ListEmptyComponent={() => <Text>No restaurant found</Text>}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ alignItems: 'center' }}>
                                <View style={{
                                    height: 200,
                                    width: 200, marginBottom: 20
                                }}>
                                    <Image source = {{uri : item.img}} style = {{height : '100%', width : '100%', resizeMode : 'contain'}}/>
                                </View>
                                <Text>Name: {item.restaurant}</Text>
                                <Text>Distance: {item.distance / 1000}KM</Text>
                            </View>
                        )
                    }}
                />

            </View>
        )
    }
}
const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        setLocation: (location) => {
            dispatch(update_location(location))
        },
        getRestaurantMaster: () => dispatch(get_restaurant_master)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenOne)