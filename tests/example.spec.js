// @ts-check
import { test, expect } from '@playwright/test';

test('Seite lädt und zeigt Titel', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'SvelteKit Agendas App' }))
      .toBeVisible();
});

// test('Agenda hinzufügen', async ({ page }) => {
//   await page.goto('/');
//
//   const input = page.getByPlaceholder('Add a new agenda');
//   const addButton = page.getByRole('button', { name: 'Add' });
//
//   await input.fill('Test Agenda');
//   await addButton.click();
//
//   const listItem = page.locator('.agenda-item', { hasText: 'Test Agenda' });
//
//   await expect(listItem).toHaveCount(1);
// });

test('Agenda entfernen', async ({ page }) => {
  await page.goto('/');

  const input = page.getByPlaceholder('Add a new agenda');
  const addButton = page.getByRole('button', { name: 'Add' });

  await input.fill('Zu löschen');
  await addButton.click();

  await expect(page.getByText('Zu löschen')).toBeVisible();

  const removeButton = page.getByRole('button', { name: 'Remove' });
  await removeButton.click();

  await expect(page.getByText('Zu löschen')).not.toBeVisible();
});