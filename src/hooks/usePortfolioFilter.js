import { useMemo, useState } from 'react';

export function usePortfolioFilter(items, categories = []) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filters = useMemo(() => ['all', ...categories.map(cat => cat.id)], [categories]);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return items;
    }
    return items.filter((item) =>
      item.categories && item.categories.includes(selectedCategory)
    );
  }, [items, selectedCategory]);

  const getCategoryInfo = (categoryId) => {
    return categories.find(cat => cat.id === categoryId) || { name: categoryId, color: 'gray' };
  };

  const getItemCategories = (item) => {
    if (!item.categories) return [];
    return item.categories.map(catId => getCategoryInfo(catId));
  };

  return {
    selectedCategory,
    setSelectedCategory,
    filters,
    filteredItems,
    categories,
    getCategoryInfo,
    getItemCategories,
  };
}
