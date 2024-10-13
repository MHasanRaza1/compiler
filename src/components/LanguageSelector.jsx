import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { LANGUAGE_VERSIONS } from '../../constants'

const LanguageSelector = ({language, onSelect}) => {
    const languages = Object.entries(LANGUAGE_VERSIONS);
    return (
        <Box ml={2} mb={4}>
            <Text mb={2} fontSize='lg'>Language: </Text>
            <Menu isLazy>
                <MenuButton as={Button}>
                    {language}
                </MenuButton>
                <MenuList bg='#110c1b'>
                    {
                        languages.map(([lang, version]) => {
                            return (
                                <MenuItem key={lang} 
                                color={
                                    lang === language ? 'blue.400' : ''
                                }
                                bg={
                                    lang === language ? 'gray.9 00' : ''
                                }
                                _hover={{
                                    color: 'blue.400',
                                    bg: 'gray.900'
                                }}
                                onClick={()=>onSelect(lang)}>
                                    {lang}
                                    &nbsp;
                                    <Text as='span' color='gray.600' fontSize='sm'>
                                        {version}
                                    </Text>
                                </MenuItem>
                            )
                        })
                    }
                </MenuList>
            </Menu>
        </Box>
    )
}

export default LanguageSelector