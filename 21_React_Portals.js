/**
 * 21. What are React Portals? How are modals mounted using them?
 *
 * Concept:
 * - Normally, a component is mounted into the DOM as a child of its nearest parent element.
 * - Portals provide a first-class way to render children into a DOM node that exists OUTSIDE the DOM hierarchy of the parent component.
 *
 * Syntax:
 * ReactDOM.createPortal(child, container)
 *
 * Use Case (Modals/Tooltips):
 * - If you have a modal inside a div with `overflow: hidden` or `z-index`, the modal might get clipped or appear behind other elements.
 * - By using a Portal, you can render the Modal physically in `document.body` (or a specific #modal-root div at the top level), while logically keeping it int the React Component Tree.
 *
 * Event Bubbling:
 * - Even though the portal is elsewhere in the DOM, an event fired from inside the portal will propagate to ancestors in the React tree (Syntethic Event System), not just the HTML tree.
 */

/* Code Example (Concept):

const Modal = ({ children, onClose }) => {
  // Use a DOM element that exists in index.html, e.g., <div id="modal-root"></div>
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};
*/
