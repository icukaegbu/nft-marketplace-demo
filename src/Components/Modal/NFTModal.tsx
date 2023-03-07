import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';
import NFTCard from '../NFTCard/NFTCard';

function NFTModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="NFT Info Card" size="md">
        <NFTCard />
      </Modal>

      <Group position="center">
        <Button onClick={open} radius="xl" style={{ flex: 1 }}>
          Open modal
        </Button>
      </Group>
    </>
  );
}

export default NFTModal