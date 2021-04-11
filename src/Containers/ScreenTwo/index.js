import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import update_person from '../../Store/actions/personActions'
import update_game from '../../Store/actions/gameActions'
import update_user from '../../Store/actions/userActions'
import update_location from '../../Store/actions/locationActions'
import get_restaurant_master from '../../Store/actions/restaurantMasterActions'

class ScreenTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: "",
            game: "",
            latitude: 0,
            longitude: 0
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Person Name : {this.props.person.name}</Text>
                <Text>Game Name : {this.props.game.name}</Text>
                <Text>Latitude : {this.props.location.latitude}</Text>
                <Text>Longitude : {this.props.location.longitude}</Text>
                <TextInput
                    placeholder={"Update Person"}
                    onChangeText={(person) => this.setState({ person })}
                />
                <TextInput
                    placeholder={"Update Game"}
                    onChangeText={(game) => this.setState({ game })}
                />
                <TextInput
                    placeholder={"Update Latitude"}
                    onChangeText={(latitude) => this.setState({ latitude })}
                />
                <TextInput
                    placeholder={"Update Longitude"}
                    onChangeText={(longitude) => this.setState({ longitude })}
                />
                <Button
                    title={"Update Person"}
                    onPress={() => this.props.updatePerson(this.state.person)}
                />
                <Button
                    title={"Update Game"}
                    onPress={() => this.props.updateGame(this.state.game)}
                />
                <Button
                    title={"Update Location"}
                    onPress={() => this.props.updateLocation({
                        latitude: this.state.latitude,
                        longitude: this.state.longitude
                    })}
                />
                <Button
                    title={"Get Users"}
                    onPress={this.props.getUsers}
                />
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePerson: (val) => dispatch(update_person(val)),
        updateGame: (val) => dispatch(update_game(val)),
        getUsers: () => dispatch(update_user),
        updateLocation: (val) => {
            dispatch(update_location(val))
            dispatch(get_restaurant_master)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ScreenTwo);