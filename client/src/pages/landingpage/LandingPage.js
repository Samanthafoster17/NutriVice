import React from 'react';

import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer"

import Cards from '../../components/Cards';
import CardItem from "../../components/CardItem";
import Nav from '../../components/Nav';

function LandingPage() {
    return (
        <>
            <Nav />
            <Jumbotron />
            <Cards>
                <CardItem icon = "fa-id-card" text = "Tell us about your goals and preferences, so we can come up with a meal plan just for you"/>
                <CardItem icon = "fa-calendar-day" text = "Check out your specialized meal plan. You can always change your preferences to get meals better suited to your wants or needs." />
                <CardItem icon = "fa-blender" text = "Get cooking and track your meals! We'll keep you on track, Bon Apetite!"/>
            </Cards>
            <Footer />
        </>
    )
}

export default LandingPage;