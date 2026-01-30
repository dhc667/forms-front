import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { QuestionCard } from '@/components/QuestionCard';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { SimpleContextMenu } from '@/components/form-renderers';
import type { FormSchema } from '@/lib/form-builder/types/form';
import { exampleFormSchema } from '@/lib/debug/data/form-schema';

export default function CreateSchemaPage() {
  const { t } = useTranslation('create-schema');
  const [formSchema, setFormSchema] = useState<FormSchema>(exampleFormSchema);

  const [contextMenu, setContextMenu] = useState<{
    element: any;
    position: { x: number; y: number };
  } | null>(null);

  // Handle click outside to close context menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.context-menu')) {
        setContextMenu(null);
      }
    };

    if (contextMenu) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [contextMenu]);

  const deleteQuestion = (questionId: string) => {
    setFormSchema(prev => ({
      ...prev,
      questions: prev.questions.filter(q => q.id !== questionId)
    }));
  };

  const addQuestion = () => {
    // For now, just add an empty question - we'll implement this properly later
    setFormSchema(prev => ({
      ...prev,
      questions: [...prev.questions, {
        id: crypto.randomUUID(),
        components: []
      }]
    }));
  };

  const handleElementRightClick = (element: any, event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu({
      element,
      position: { x: event.clientX, y: event.clientY }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">{formSchema.title}</h1>
              <p className="text-muted-foreground">ID: {formSchema.id}</p>
            </div>

            {formSchema.questions.map((question, index) => (
              <QuestionCard
                key={question.id}
                questionNumber={index + 1}
                components={question.components}
                onDelete={() => deleteQuestion(question.id)}
                onElementRightClick={handleElementRightClick}
              />
            ))}

            <Button
              onClick={addQuestion}
              variant="outline"
              className="w-full border-dashed border-primary-light text-primary hover:bg-primary/5"
            >
              <span className="text-2xl mr-2">+</span>
              <span>{t('addQuestion')}</span>
            </Button>
          </div>
        </main>
      </div>

      {/* Context Menu */}
      {contextMenu && (
        <SimpleContextMenu
          element={contextMenu.element}
          position={contextMenu.position}
          onClose={() => setContextMenu(null)}
        />
      )}
    </div>
  );
}