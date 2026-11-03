import React, { useMemo } from 'react';
import { Modal } from 'react-bootstrap';
import ServicePreviewPane from './ServicePreviewPane';
import { isLandingRegion } from './landingBlocks';

/*
 * Popup preview of one Page Builder block (eye button on every block in PageBuilder.jsx): the block
 * alone, rendered with the website's own components like Live Preview (unsaved edits included,
 * nothing saved). Landing pages keep their Header block so the page theme's colours apply.
 * `sample`: a block from Available Blocks (eye button) with its default content, not on the page;
 * `onAdd` shows an "Add to page" button.
 */
const KIND = { home: 'home', journey: 'journey', tool: 'tool', landing: 'landing' };

export default function BlockPreviewModal({ section, sections = [], blockSet = 'default', label = '', sample = false, onAdd, onHide }) {
  const kind = KIND[blockSet] || 'page';
  const draft = useMemo(() => {
    if (!section) return null;
    let list = [section];
    if (kind === 'landing' && !isLandingRegion(section.type)) {
      const header = sections.find((s) => s.type === 'LandingHeader');
      if (header) list = [header, section];
    }
    // A page without a Hero block shows its title as the hero ("Untitled page" in a preview): an
    // invisible title keeps that hero empty, so only the block shows.
    return kind === 'home' ? { sections: list } : { title: '​', slug: '', content: '', sections: list };
  }, [section, sections, kind]);

  return (
    <Modal show={Boolean(section)} onHide={onHide} size="xl" centered scrollable dialogClassName="pb-block-preview-modal">
      <Modal.Header closeButton>
        <Modal.Title className="fs-6"><i className="bi bi-eye me-2 text-primary"></i>Preview: {label}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        {draft && <ServicePreviewPane kind={kind} draft={draft} />}
        <div className="small text-muted px-3 pb-3">
          {sample
            ? 'This block with its sample content, as it looks on the website. It is not on the page yet; add it to edit the content.'
            : 'Only this block, as it looks on the website (unsaved changes included). Use Live Preview for the whole page.'}
        </div>
      </Modal.Body>
      {onAdd && (
        <Modal.Footer className="py-2">
          <button type="button" className="btn btn-light btn-sm" onClick={onHide}>Close</button>
          <button type="button" className="btn btn-primary btn-sm" onClick={onAdd}><i className="bi bi-plus-lg me-1"></i>Add to page</button>
        </Modal.Footer>
      )}
    </Modal>
  );
}
