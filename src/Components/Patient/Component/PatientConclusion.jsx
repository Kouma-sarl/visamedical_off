import React from 'react'
import { Box, Flex, Text, SimpleGrid } from '@chakra-ui/react'
// Custom components
import Card from '../../Acceuil/Component/Card'

const PatientConclusion = (props) => {
  const { bg, image, ...rest } = props

  const data = [
    {
      name: 'Dr diallo Alpha Abdoulaye ',
      date: '01-10-2012',
      ville: 'labe',
      conclusion: 'ghhds,nkljkgnql; :jbh,g,nqs;b, hgggqhsb',
    },
    {
      name: 'Dr diallo ',
      date: '01-10-2012',
      ville: 'labe',
      conclusion: 'ghhds,nkljkgnql; :jbh,g,nqs;b, hgggqhsb',
    },
    {
      name: 'Dr diallo ',
      date: '01-10-2012',
      ville: 'labe',
      conclusion: 'ghhds,nkljkgnql; :jbh,g,nqs;b, hgggqhsb',
    },
    {
      name: 'Dr diallo ',
      date: '01-10-2012',
      ville: 'labe',
      conclusion: 'ghhds,nkljkgnql; :jbh,g,nqs;b, hgggqhsb',
    },
  ]
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 3 }}
      spacing={{ base: '20px', xl: '20px' }}
    >
      {data?.map((item, id) => {
        return (
          <Card bg={bg} {...rest} p="14px" borderRadius="10px">
            <Flex
              align="center"
              direction={{ base: 'column', md: 'row' }}
              flexWrap={{ sm: 'nowrap', md: 'wrap' }}
            >
              <Box mt={{ base: '10px', md: '0' }}>
                <Text
                  // color={textColorPrimary}
                  fontWeight="bold"
                  fontSize="md"
                >
                  {item.name}
                </Text>
                <Text
                  fontWeight="500"
                  // color={textColorSecondary}
                  fontSize="sm"
                  me="4px"
                >
                  {item.date} à {item.ville}
                </Text>
                <Text fontWeight="bold" fontSize="xl">
                  Conclusion général:
                </Text>
                <Text fontSize="md" me="26px">
                  {item.conclusion}
                </Text>
              </Box>
            </Flex>
          </Card>
        )
      })}
    </SimpleGrid>
  )
}

export default PatientConclusion
