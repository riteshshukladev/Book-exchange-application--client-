import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Button } from "@/components/ui/button";
  
  import { useBookList } from "../../../store/bookListingStore";
import BookListing from "@/components/user-pages/BookListing";

//   Add the function to delete the API

const DeleteBookModal = () => {
  const { isDeleteModalOpen, closeDeleteModal, currentBook } = BookListing();

  if (!currentBook) return null;

  return (
    <Dialog open={isDeleteModalOpen} onOpenChange={closeDeleteModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Book</DialogTitle>
        </DialogHeader>
        <p>Are you sure you want to delete "{currentBook.title}" by {currentBook.author}?</p>
        <DialogFooter>
          <Button variant="outline" onClick={closeDeleteModal}>Cancel</Button>
          <Button variant="destructive" onClick={''}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteBookModal;
