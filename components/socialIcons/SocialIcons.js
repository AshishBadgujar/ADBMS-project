import React from 'react';
import { FaDev, FaFacebook, FaGooglePlay, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

import blogConfig from '../../blogConfig';

import styling from './SocialIcons.module.scss';

const SocialIcons = () => (
    <div className={styling.social}>
        <a href={blogConfig.social.youtube} target='_blank' rel='noreferrer' hidden={!blogConfig.social.youtube}>
            <FaYoutube />
        </a>


        <a href={blogConfig.social.linkedin} target='_blank' rel='noreferrer' hidden={!blogConfig.social.linkedin}>
            <FaLinkedin />
        </a>

        <a href={blogConfig.social.facebook} target='_blank' rel='noreferrer' hidden={!blogConfig.social.facebook}>
            <FaFacebook />
        </a>


        <a href={blogConfig.social.instagram} target='_blank' rel='noreferrer' hidden={!blogConfig.social.instagram}>
            <FaInstagram />
        </a>


        <a href={blogConfig.social.twitter} target='_blank' rel='noreferrer' hidden={!blogConfig.social.twitter}>
            <FaTwitter />
        </a>


        <a href={blogConfig.social.playstore} target='_blank' rel='noreferrer' hidden={!blogConfig.social.playstore}>
            <FaGooglePlay />
        </a>
    </div>
);

export default SocialIcons;