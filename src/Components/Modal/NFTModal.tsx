import { useDisclosure } from '@mantine/hooks';
import { Modal, Group } from '@mantine/core';
import NFTCard from '../NFTCard/NFTCard';
import { NFTHeroCardProps } from '../../Utils/types';
import NFTHeroCard from '../NFTHeroCard/NFTHeroCard';

function NFTModal({ card }: { card: NFTHeroCardProps }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="NFT Info Card" size="65%">
        <NFTCard card={card} />
      </Modal>

      <Group position="center">
        {/* <Button onClick={open} radius="xl" style={{ flex: 1 }} variant="gradient" gradient={{ from: 'grape', to: 'pink' }}>
          View More...
        </Button> */}
        <NFTHeroCard card={card} open={open} />
      </Group>
    </>
  );
}

export default NFTModal