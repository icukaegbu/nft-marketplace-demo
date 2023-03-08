import { Paper, Text, Title, Group, Center, Badge } from '@mantine/core'
import { IconEye, IconMessageCircle } from '@tabler/icons-react'
import { useStyles } from './NFTHeroCard.style'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { NFTHeroCardProps } from '../../Utils/types'
// import NFTModal from '../Modal/NFTModal'

function NFTHeroCard({
  card,
  open,
}: {
  card: NFTHeroCardProps
  open: () => void
}) {
  const { classes } = useStyles()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [100, -100], [-30, 30])

  const { image, title, category } = card

  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        whileHover={{ scale: 1.1, cursor: 'grabbing' }}
        style={{ x, y, rotateX, rotateY }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
      >
        <Paper
          shadow="md"
          p="xl"
          radius="lg"
          sx={{ backgroundImage: `url(${image})` }}
          className={classes.card}
          onClick={open}
        >
          <div>
            <Text className={classes.category} size="xs">
              {category}
            </Text>
            <Title order={3} className={classes.title}>
              {title}
            </Title>
          </div>
          {/* <Button variant="white" color="dark">
        Read article
      </Button> */}

          <Group spacing="lg">
            {/* <NFTModal card={card} /> */}
            <Center>
              <Badge color={'pink'} variant="light">
                <IconEye size="1rem" stroke={1.5} color={'#127740'} />
                25
              </Badge>
            </Center>
            <Center>
              <Badge color={'green'} variant="light">
                <IconMessageCircle size="1rem" stroke={1.5} color={'#b01376'} />
                40
              </Badge>
            </Center>
          </Group>
        </Paper>
      </motion.div>
    </div>
  )
}

export default NFTHeroCard
