import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';
import NFTCard from '../NFTCard/NFTCard';

// function NFTModal({ opened, open, close }: { opened: boolean, open: () => void, close: () => void }) {
  function NFTModal() {
    const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="NFT Info Card" size="md">
        <NFTCard />
      </Modal>

      <Group position="center">
        <Button onClick={open} radius="xl" style={{ flex: 1 }} variant="gradient" gradient={{ from: 'grape', to: 'pink' }}>
          View More...
        </Button>
      </Group>
    </>
  );
}

export default NFTModal