import User from "../models/user.model.js";

const getFavouriteLocations = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    return user.favourites;
};

const addFavouriteLocation = async (userId, location) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    if (!user.favourites.includes(location)) {
        user.favourites.push(location);
        await user.save();
    }

    return user.favourites;
}

const removeFavouriteLocation = async (userId, location) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    user.favourites = user.favourites.filter(fav => fav !== location);
    await user.save();

    return user.favourites;
};

export const favService = { getFavouriteLocations, addFavouriteLocation, removeFavouriteLocation };