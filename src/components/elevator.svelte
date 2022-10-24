<script lang="ts">
  const floors = [
    { name: "Floor 1", id: 1 },
    { name: "Floor 2", id: 2 },
    { name: "Floor 3", id: 3 },
  ];

  const activateElevator = function (floorId: Number) {
    const floor = document.getElementById(`floor-${floorId}`);
    alert(`Going to floor ${floorId}`);
    floor?.scrollIntoView();
  };
</script>

<div class="controller">
  <ul>
    {#each floors as floor, i}
      <li>
        <a href={`#floor-${floor.id}`}>{floor.name}</a>
        <button
          title={`Go to floor ${floor.id}`}
          on:click={() => activateElevator(floor.id)}
        >
          {floor.name}
        </button>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  // General Styles
  button {
    background-color: var(--green-500);
    padding: 0.5ch 1ch;
  }

  // Main Styles
  .controller {
    z-index: 1000;
    position: fixed;
    right: 0;
    background-color: var(--green-300);
    font-size: 1.125rem;

    > ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>
